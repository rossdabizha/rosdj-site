# Language System Troubleshooting Guide

## ✅ Issues Fixed

1. **Incorrect English translations** - Fixed `dj-tools-title` that was showing Ukrainian text instead of English
2. **Missing data-lang attributes** - Added `data-lang` attribute to playlist title
3. **Poor error handling** - Added comprehensive debugging and error handling

## 🔍 How to Test the Language System

### Open Browser Console (F12)
When you load the page, you should see:
```
Found X elements with data-lang attributes
Found 3 language buttons
Updating language to: es (or saved language)
Language update complete: X updated, 0 errors
```

### Test Language Switching
1. Click on UA/EN/ES buttons in the navigation
2. Check console for successful updates
3. Verify page content changes language
4. Check that active button styling works

### Common Issues & Solutions

#### Issue: "Language not found: xx"
**Cause:** Invalid language code passed to updateLanguage()
**Solution:** Check that language buttons have correct `data-lang` attributes

#### Issue: "Missing translation for key: xxx"
**Cause:** Translation key exists in HTML but not in translations object
**Solution:** Add the missing key to all language objects

#### Issue: Elements not updating
**Cause:** Missing `data-lang` attribute on HTML element
**Solution:** Add `data-lang="key-name"` to the element

#### Issue: Language preference not saved
**Cause:** localStorage blocked or unavailable
**Solution:** Check browser privacy settings, try incognito mode

## 🛠️ Manual Testing Commands

### In Browser Console:
```javascript
// Test language switching
updateLanguage('en');
updateLanguage('es');
updateLanguage('ua');

// Check current elements
document.querySelectorAll('[data-lang]').length

// Check translations object
Object.keys(translations)
```

### Check Local Storage:
```javascript
localStorage.getItem('selectedLanguage')
```

## 📋 Language Codes
- `es` - Spanish (default)
- `en` - English
- `ua` - Ukrainian

## 🚀 After Deployment
1. Test all three languages work
2. Check mobile responsiveness
3. Verify no JavaScript errors in console
4. Test language persistence across page reloads
