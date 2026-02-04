# How to Put Your Website Offline

## Quick Method: Enable Maintenance Mode

### To Enable Maintenance Mode (Take Site Offline):

1. **Rename files:**
   ```bash
   # Save current page
   mv app/page.tsx app/page-online.tsx
   
   # Enable maintenance page
   mv app/page-offline.tsx app/page.tsx
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Enable maintenance mode"
   git push
   ```

### To Disable Maintenance Mode (Bring Site Back Online):

1. **Rename files back:**
   ```bash
   # Restore normal page
   mv app/page.tsx app/page-offline.tsx
   mv app/page-online.tsx app/page.tsx
   ```

2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Disable maintenance mode"
   git push
   ```

## Alternative Methods

### Method 1: Delete/Remove Deployment
- **Vercel**: Delete project or remove domain
- **Netlify**: Delete site or disable auto-deploy
- **Other hosting**: Delete the deployment

### Method 2: Use Environment Variable
Create a middleware that checks for a maintenance flag.

### Method 3: DNS Redirect
Point your domain to a maintenance page hosted elsewhere.

## PowerShell Commands (Windows)

### Enable Maintenance:
```powershell
Rename-Item app/page.tsx app/page-online.tsx
Rename-Item app/page-offline.tsx app/page.tsx
```

### Disable Maintenance:
```powershell
Rename-Item app/page.tsx app/page-offline.tsx
Rename-Item app/page-online.tsx app/page.tsx
```
