# Darkmode Safari

Force dark mode on all websites in iOS Safari (and any browser with userscript support).

No Mac, no Xcode, no Apple Developer account required.

## How It Works

Uses CSS `filter: invert(1) hue-rotate(180deg)` to flip page colors to dark. Images, videos and other media are flipped back to preserve original colors.

## Features

- Instant dark mode on any website
- No flash of white — injects at `document-start`
- Images, videos, canvas stay in original colors
- Built-in exclude list for sites with native dark mode (YouTube, GitHub, Discord, etc.)
- Works with **Userscripts** (iOS Safari) and **Tampermonkey** (Chrome/Edge/Firefox)

## Install on iPhone (iOS Safari)

### Step 1: Install the Userscripts App

Download [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) from the App Store (free).

### Step 2: Enable the Extension

1. Go to **Settings → Safari → Extensions**
2. Tap **Userscripts** → toggle it **ON**
3. Set permission to **Allow** for **All Websites**

### Step 3: Set Up Script Directory

1. Open the **Userscripts** app
2. Tap the directory icon (bottom-left) to choose where scripts are stored
3. Pick a folder — e.g., create a new folder called `Userscripts` in **On My iPhone** or **iCloud Drive**
4. Remember this location — you'll save the script file here

### Step 4: Download the Script to iPhone

**Option A — Download from Safari (Easiest)**

1. Open Safari on your iPhone
2. Navigate to: [darkmode-safari.user.js](https://raw.githubusercontent.com/jasonzhouyu/darm_mode_safari/main/darkmode-safari.user.js)
3. Safari will show the raw JavaScript text
4. Tap the **Share** button (square with arrow) → **Save to Files**
5. Navigate to the Userscripts folder you set in Step 3 → tap **Save**

**Option B — Download via Files App**

1. Open the **Files** app on iPhone
2. Tap the `...` menu (top-right) → **Connect to Server** if your script is on a NAS or network share
3. Or simply use **iCloud Drive** to sync the `.user.js` file from your computer

**Option C — Copy-Paste**

1. Open the script file on any device, copy the full text
2. Send it to yourself (iMessage, email, AirDrop, Notes, etc.)
3. On iPhone, open the **Userscripts** app → tap **+** → paste the code → save

### Step 5: Verify

1. Open any website in Safari (e.g., `baidu.com`)
2. Tap the **puzzle icon** in the address bar → confirm Userscripts is active
3. The page should now render in dark mode

## Install on Desktop (Chrome / Edge / Firefox)

1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Open the [raw script file](https://raw.githubusercontent.com/jasonzhouyu/darm_mode_safari/main/darkmode-safari.user.js) — Tampermonkey will prompt to install
3. Click **Install**
4. Visit any website to verify

## Customization

### Exclude a Website

Add a line in the script header:

```javascript
// @exclude      *://example.com/*
```

### Temporarily Disable

- **iOS**: Tap the puzzle icon in Safari → toggle off Userscripts
- **Desktop**: Click the Tampermonkey icon → disable the script

## License

MIT
