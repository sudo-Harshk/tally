# Manual Test Suite

## Phase 4.5 Testing

### Basic Functionality

- [ ] Extension loads in Chrome
- [ ] Popup opens when clicking extension icon
- [ ] Counter displays initial value of 0
- [ ] Increment button increases count by 1
- [ ] Decrement button decreases count by 1
- [ ] Reset button sets count to 0
- [ ] Clicking number allows editing

### Badge

- [ ] Badge shows "0" when count is 0
- [ ] Badge shows exact number for 1-999
- [ ] Badge shows "999+" for counts > 999
- [ ] Badge updates instantly on change

### Persistence

- [ ] Count persists after popup close
- [ ] Count persists after browser restart
- [ ] Count persists after computer restart
- [ ] Count persists after extension update

### Edge Cases

- [ ] Decrement from 0 stays at 0
- [ ] Large numbers (1000+) display correctly
- [ ] Rapid clicking works without desync
- [ ] Edit count with valid number works
- [ ] Edit count with invalid number reverts

### UI

- [ ] Popup has no layout shifts
- [ ] Dark theme works correctly
- [ ] Light theme works correctly
- [ ] Buttons have proper hover states
- [ ] Smooth transitions on interactions

### Error Handling

- [ ] No console errors during normal use
- [ ] Error message shown if storage fails
- [ ] Previous value kept if write fails
