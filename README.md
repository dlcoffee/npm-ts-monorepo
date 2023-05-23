- `npm install` at root to install all dependencies
- `npm run build -w api` to build a `dist/` folder in the `api` workspace
- `npm run start -w api` to run server

this errors because `api` depends on `utils` but nothing is transpiling `utils` from typescript to javascript.

inspiration: https://turbo.build/repo/docs/handbook/sharing-code/internal-packages
