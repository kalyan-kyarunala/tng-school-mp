# School Payment & Parent Engagement — TNG eWallet Mini Program (MVP)

Converted from the clickable HTML prototype into a runnable **TNG Digital Mini Program**
(Alipay+ framework: AXML / ACSS / JS / JSON).

## Run it
1. Install **TNG Mini Program Studio** (or Alipay Mini Program IDE) from
   https://miniprogram.tngdigital.com.my
2. `File > Open` this folder.
3. Enter your sandbox **AppID** (or use a temporary/dev AppID) and preview.

## Project structure
```
app.json          pages list, window (TNG-blue title bar), native 5-tab tabBar
app.acss          shared design system (converted from the prototype CSS)
app.js            App(); TNG SSO hook (onLaunch)
utils/qr.js       mock QR matrix generator (replace with a real QR component)
pages/<name>/     each screen: .axml .acss .js .json
```

## Screens (18 pages + pay sheet)
Onboarding: discover · link · link-pending · link-success
Home: home (tab) · children · profile (student QR)
Fees: fees (tab) · fee-detail (+ pay sheet) · pay-success · receipt
Announcements: inbox (tab) · notice
Events: events (tab) · event-detail · ticket (QR)
VISA & history: card (tab) · history

## Navigation
- Tab pages (Home/Fees/Events/Card/Inbox) use `my.switchTab`.
- Sub-pages use `my.navigateTo`; the native title bar provides the back button.
- Shared handlers `nav` / `navTab` / `back` / `toast` live on every page; targets are
  passed via `data-url` / `data-msg`.

## TNG integration points (mocked here — wire to real APIs)
- **SSO / profile**: `app.js onLaunch` → `my.getAuthCode` → exchange on backend.
- **Wallet payment**: `pages/fee-detail` and `pages/event-detail` → `my.tradePay`
  (backend creates the order and returns `tradeNO`). Currently simulated with a loader.
- **QR scan** (link a child): `my.scan` in `pages/link`.
- **Push / inbox / deep-link**: handled by the TNG host; content shown in `inbox`/`notice`.
- **VISA transactions**: `pages/card` list should be fetched read-only from the existing
  TNGD VISA API via your backend proxy.

## Notes
- QR codes are a visual mock (grid of cells). Swap `utils/qr.js` + the `.qr` markup for a
  real QR component or `canvas` before UAT.
- Colours/spacing use `rpx` (750rpx = screen width) so layout scales across devices.
- Multi-language (EN/BM/CN) and PDPA consent screens are Phase-of-build items, not included
  in this visual MVP.
