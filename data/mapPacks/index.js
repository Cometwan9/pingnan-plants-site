(function () {
  const parts = window.SPRIG_MAP_PACK_PARTS || {};
  const mapPacks = [parts.pingnan, parts.hangzhou].filter(Boolean);

  function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function distanceKm(from, to) {
    if (!from || !to) return Number.POSITIVE_INFINITY;
    const fromLng = Number(from.lng ?? from[0]);
    const fromLat = Number(from.lat ?? from[1]);
    const toLng = Number(to.lng ?? to[0]);
    const toLat = Number(to.lat ?? to[1]);
    if (![fromLng, fromLat, toLng, toLat].every(Number.isFinite)) return Number.POSITIVE_INFINITY;

    const earthRadiusKm = 6371;
    const deltaLat = toRadians(toLat - fromLat);
    const deltaLng = toRadians(toLng - fromLng);
    const lat1 = toRadians(fromLat);
    const lat2 = toRadians(toLat);
    const a =
      Math.sin(deltaLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLng / 2) ** 2;
    return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  function normalizeLocation(userLocation) {
    if (!userLocation) return null;
    const lng = Number(userLocation.lng ?? userLocation.longitude ?? userLocation[0]);
    const lat = Number(userLocation.lat ?? userLocation.latitude ?? userLocation[1]);
    if (!Number.isFinite(lng) || !Number.isFinite(lat)) return null;
    return { lng, lat };
  }

  function findNearestMapPack(userLocation, packs = mapPacks) {
    const location = normalizeLocation(userLocation);
    if (!location) {
      return {
        status: "unknown",
        userLocation: null,
        mapPack: null,
        distanceKm: Number.POSITIVE_INFINITY,
        matches: [],
      };
    }

    const matches = packs
      .map((pack) => ({
        mapPack: pack,
        distanceKm: distanceKm(location, pack.center),
      }))
      .filter((match) => match.distanceKm <= match.mapPack.radiusKm)
      .sort((a, b) => a.distanceKm - b.distanceKm);

    if (!matches.length) {
      return {
        status: "unknown",
        userLocation: location,
        mapPack: null,
        distanceKm: Number.POSITIVE_INFINITY,
        matches: [],
      };
    }

    return {
      status: "matched",
      userLocation: location,
      mapPack: matches[0].mapPack,
      distanceKm: matches[0].distanceKm,
      matches,
    };
  }

  function nearestLocation(userLocation, locations = []) {
    const location = normalizeLocation(userLocation);
    if (!location) return null;
    return locations
      .filter((item) => Array.isArray(item.position))
      .map((item) => ({
        ...item,
        distanceKm: distanceKm(location, item.position),
      }))
      .sort((a, b) => a.distanceKm - b.distanceKm)[0] || null;
  }

  function generateSprigFromLocation(userLocation, mapPack) {
    if (!mapPack) {
      const location = normalizeLocation(userLocation);
      const coordLabel = location
        ? `${location.lat.toFixed(2)}, ${location.lng.toFixed(2)}`
        : "当前位置";
      return {
        temporary: true,
        source: "unknown-garden",
        sprig: {
          id: "unknown-location",
          name: "未知种种",
          plant: "未知植物线索",
          rarity: "临时发现",
          region: "未知花园",
          status: "等待记录",
          image: "./assets/ui/seed.png",
          hint: "你附近还没有完整地图包。",
          aliases: [],
          knowledge: [
            `这是一只根据 ${coordLabel} 生成的临时种种。`,
            "后续可以接入植物识别、城市数据或人工地图包，把它变成正式记录。",
          ],
        },
      };
    }

    const nearby = nearestLocation(userLocation, mapPack.locations);
    const locationSprig = nearby && mapPack.sprigs.find((sprig) => sprig.id === nearby.sprigId);
    const fallbackSprig = mapPack.sprigs[0] || null;
    const sprig = locationSprig || fallbackSprig;

    if (!sprig) {
      return generateSprigFromLocation(userLocation, null);
    }

    return {
      temporary: false,
      source: nearby ? "nearest-location" : "map-pack",
      mapPack,
      location: nearby,
      sprig,
    };
  }

  window.SPRIG_MAP_PACKS = mapPacks;
  window.SPRIG_MAP_PACK_UTILS = {
    distanceKm,
    findNearestMapPack,
    generateSprigFromLocation,
    nearestLocation,
  };
})();
