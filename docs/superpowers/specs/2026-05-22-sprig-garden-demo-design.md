# Sprig Garden Demo Design

## Goal

Build `/Users/comedy/pingnan-plants-site` into a clickable single-page prototype for the hackathon MVP of `种种花园（Sprig Garden）`.

The demo should feel like a lightweight pixel game, not a product intro page. The first screen is `我的花园`, with bottom navigation to `地图`, `AR发现`, `图鉴`, and `探险`. The prototype uses simulated interactions instead of real GPS, camera, AR, or plant-recognition APIs.

## Audience And Demo Use

The primary audience is hackathon judges. They should understand the game loop in 3-5 minutes:

1. The player is a gardener located in `福建·屏南`.
2. The garden contains collected plant spirits called `种种`.
3. Each `种种` comes from a real plant and carries local knowledge.
4. The player can explore the map, discover a plant, simulate AR capture, unlock the atlas, and send a `种种` on expedition.

## Product Shape

The app is a static browser prototype using the existing files:

- `index.html` for screen structure and prototype content.
- `styles.css` for the pixel game visual system.
- `main.js` for navigation, simulated capture, atlas unlock, garden dialogue, and expedition state.

No build step is required. Opening `index.html` or serving the folder locally should run the prototype.

## Screens

### Gardener Header

Persistent player panel shown above the active screen:

- Avatar
- Nickname: `小屏园丁`
- Level: starts at `Lv.1`; completing demo tasks can increase progress toward higher levels.
- Current location: `福建·屏南`
- Coordinates shown as a flavor detail
- Seeds currency shown as a reserved system, not a full shop

### My Garden

Default screen.

Content:

- Top-down pixel garden with paths, pond, bridge, flowerbeds, mailbox, trees, and decorative props.
- Several visible `种种`, each with a short behavior label such as `散步`, `晒太阳`, `阅读`, or `发呆`.
- Clicking a `种种` opens a knowledge bubble.
- A photo mode button hides nonessential UI briefly or visually marks the screen as share-ready.

Knowledge bubbles use local facts, for example:

- `你知道吗？屏南县保存着大量古村落，山地植物常和村落生活一起构成地方记忆。`
- `屏南路下乡曾是古代商旅的重要节点，植物和道路一起记录了迁徙与交换。`
- `鸳鸯溪是国家级风景名胜区，春季能见到丰富的野生植物景观。`

### Map

Shows a stylized radar map rather than a real map.

Content:

- Current location marker.
- Explored and unexplored areas.
- `种种出现点`.
- Region unlock panel: `福建·屏南` available, `浙江·杭州` visited but locked for this demo, `北京 / 东京 / 巴黎` not reached.
- A primary action: `发现附近种种`, which moves the user toward the AR discovery screen.

### AR Discovery

Simulates the capture loop.

Flow:

1. `拍照`
2. `识别植物`
3. `AR显示种种`
4. `捕捉`
5. `解锁图鉴`

The demo plant is `蒲公英`, unlocking `蒲公英种种`, rarity `普通`, region `屏南`. The screen should show plant information, local knowledge, and a playful pixel spirit.

After capture:

- The atlas marks `蒲公英种种` as unlocked.
- The garden includes the new `蒲公英种种`.
- A success message explains that the discovery returned to the garden.

### Atlas

Records discovered and undiscovered `种种`.

Content:

- Unlocked entries with name, plant, rarity, and region.
- Locked entries shown as silhouettes and `???`.
- Existing local plant material can be adapted from the current atlas page: `南方红豆杉`, `水松`, `金毛狗`, `屏南石豆兰`, `毛竹`, and `茶 / 桂花`.

The atlas should make clear that some entries are available in the demo and others are future discoveries.

### Expedition

Long-term loop preview.

Content:

- Dispatchable `种种` list.
- Available region: `福建·屏南`.
- Locked regions: `浙江·杭州`, `北京`, `东京`, `巴黎`.
- Button to send one `种种` on expedition.
- While dispatched, that `种种` is marked as away from the garden.
- Return preview lists possible findings: `屏南红豆杉种子`, `古村故事`, `植物照片`, `地方传闻`.

This is a simulated state change only. Timers are not required.

## Interaction Rules

- Bottom navigation swaps active panels without page reload.
- Clicking a garden spirit opens a contextual knowledge bubble.
- `发现附近种种` activates the AR screen.
- AR actions progress through stages and culminate in capture.
- Capture updates the atlas and garden state in the page.
- Expedition dispatch updates the expedition card and marks the spirit as `探险中`.
- The demo state can live in memory; persistence is not required.

## Visual Direction

- Top-down pixel garden.
- Friendly, field-notebook-like UI.
- The screen should feel playable and dense enough for repeated interaction.
- Use the existing pixel plant asset if it helps, but the first viewport must signal `种种花园`, not only `屏南植物图鉴`.
- Avoid a marketing landing page. The app experience is the first screen.

## Data Model

Use small static JavaScript arrays or objects:

- `sprigs`: id, name, plant, rarity, region, behavior, unlocked, expeditionStatus, knowledge lines.
- `atlasEntries`: id, name, plant, rarity, region, unlocked, description.
- `regions`: name, status, description.
- `discoveries`: fixed AR discovery content for the demo.

## Out Of Scope

- Real GPS map integration.
- Real AR camera overlay.
- Real plant identification.
- Backend accounts.
- Friend visits.
- Real step-count task tracking.
- Decoration shop and garden editing.
- Persistent saves.

## Verification

Manual verification is enough for this static prototype:

- Open the page in a browser.
- Confirm default screen is `我的花园`.
- Navigate to all bottom tabs.
- Click at least one `种种` and see a knowledge bubble.
- Run the map-to-AR capture flow.
- Confirm the atlas/garden reflect the captured `蒲公英种种`.
- Dispatch one `种种` from the expedition screen and confirm the status changes.
- Check the layout at mobile and desktop widths for text overlap.
