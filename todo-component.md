* update package.json with project specific data
  name (unique on npmjs), description, repository, bugs and homepage urls
- implement component
- update docs with specific instructions for a component(s)
- scp2 lodash vulnerability (not critical because scp2 is only used for
  deploy script)
  https://github.com/spmjs/node-scp2/issues/116
  https://github.com/spmjs/node-scp2/pull/123

# 0.0.1 - initial component version


# Convention
Unordered list with:
- `*` means in progress items
- `-` means todo items
- `+` means completed items

Done section may contain releases, here is the example of todo.md file
```
* work currently in progress
- work that
- is planned
  - sub
  - items
- to be done in future

# 0.0.2 -
+ some items
+ not included in
+ any release yet

# 0.0.1 - initial component version, you can also put some summary
explaining what exactly this release contains
+ update package.json with project specific data
  name (unique on npmjs), description, repository, bugs and homepage urls
+ implement component
+ update docs with specific instructions for a component(s)
```
Here version 0.0.2 is not released yet but already contains some work.
