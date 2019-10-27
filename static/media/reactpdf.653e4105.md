if you are working on some project ,  you might come across a situation , where you need to render pdf files in react component .
this post i'll walk through a simple guide on how to render pdf in react components.

and the process is pretty straight forward.
but the thing is i am out of ideas and i so exited to write my first article on the blog i created.may be ill tell you later how i build this thing you are looking at right now.

so trash talk aside . 

i'll assume that you have basic idea about react , and how components and shit work together . 

before we begin ,
i am not going to ```create-react-app``` because i dont have much data left for this month and i am not going to waste it on installing ```node_modules```

so let's try with our friend ```CDN```

to get start 
create a new folder and then open up with you favorite code editor , for me it's vscode.

make a html file ```pdftest.html```
add react cdn link 


```
import Markdown from 'markdown-to-jsx';
import React from 'react';
import { render } from 'react-dom';
 
import DatePicker from './date-picker';


```

<GithubGist
url="https://gist.github.com/RizkyRajitha/fafe97e3cd899dfecfefa6d4bc2498b7"
id="00000015"
Loading={() => <p>LOADING!</p>}
></GithubGist>
      