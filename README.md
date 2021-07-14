Demo of reusable react-components library 

# Technologies

1. Next.js
2. Typescript
3. Storybook
4. styled-components
5. material-ui
6. rollup

# How to run

```
npm run dev - to run nexjts (not needed)
npm run storybook - to run storybook
```

# Usage
You can use rollup library to bundle the JS

```
Run
npm run build 
```

this creates 2 files (.esm, .cjs) in `dist` folder in root directory. 

You can copy these files and move them into your apps `node_modules` directory. eg:

`yourapp/node_modules/react-componenets/index.esm.js`

*Note* You probably have to rename it to index.js.

Then you can use it in code as follows:

```
import { Button } from 'react-components'

<Button></Button>
```