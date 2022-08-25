rm -rf node_modules/.cache
yarn next build
yarn next export
touch out/.nojekyll
git add -f out/
git checkout -b temp-for-deploy-gh-pages
git commit -m "Deploy Next.js to gh-pages"
git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git checkout master
git branch -D temp-for-deploy-gh-pages