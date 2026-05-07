# Scripts Directory

This folder contains utility scripts for the website-sicapit project, organized by purpose.

## Folder Structure

### `/fixes`
Scripts for fixing and transforming components:
- `fix-*.js` - Various bug fixes and component updates
- `replace-*.js` - Content replacement scripts
- `rewrite-*.js` - Content rewrite scripts

### `/data`
Scripts for managing data and content:
- `insert-reviews*.js` - Scripts to insert review data into the database

### `/utilities`
General utility and helper scripts:
- `check-vars.js` - Variable validation script
- `create-templates.js` - Template generation
- `download-images.js` - Image downloading utility
- `script.js` - General utility script

## Usage

Run scripts from the project root directory:
```bash
node scripts/fixes/fix-design.js
node scripts/data/insert-reviews.js
node scripts/utilities/check-vars.js
```

## Notes

- Most scripts are one-time use utilities
- Always review script contents before execution
- Some scripts may modify database/files - backup before running
