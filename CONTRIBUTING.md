# Contributing to Tally

## Branch Naming

- `feat/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `test/` - Test additions/updates

## Commit Convention

```
feat: add counter service
fix: badge update race condition
refactor: simplify storage layer
docs: update roadmap
```

## Coding Standards

- No `any` types
- Zero TypeScript errors
- Zero ESLint errors
- No direct Chrome API usage outside `lib/chrome.ts`
- Keep components presentational where possible
- All storage operations return typed results

## Pull Request Checklist

- [ ] Code follows coding standards
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Manual testing completed
- [ ] Documentation updated (if applicable)

## Testing Checklist

- [ ] Extension loads in Chrome
- [ ] Counter increments correctly
- [ ] Counter decrements correctly
- [ ] Reset works
- [ ] Edit count works
- [ ] Badge updates correctly
- [ ] Storage persists after restart
- [ ] No console errors

## Release Process

1. Update version in `package.json` and `manifest.json`
2. Update `CHANGELOG.md`
3. Create git tag
4. Build and test
5. Submit to Chrome Web Store
