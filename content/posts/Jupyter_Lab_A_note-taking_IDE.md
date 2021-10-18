---
title: "Jupyter Lab, a note taking IDE"
date: 2021-10-17T12:04:05-04:00
tags: ["Misc"]
cover:
    image: "https://github.com/Eshanepicfighter/Eshanepicfighter/blob/main/content/posts/jupyterlab.png?raw=true"
    alt: "A picture of the Jupyter Lab User Interface"
    caption: "Jupyter lab"
    relative: false 
---

After a few months of switching between my virtual notebook and my IDE, I stumbled upon a new, innovative solution; Jupyter Lab

Project Jupyter itself was born out of the IPython project, quickly gaining a reputation for 100% free and opensource high quality projects, one of which is Jupyter Lab
<br>
<br>
Jupyter Lab, in the words of the Jupyter Project themselves, is a "Web-based flexible interactive development environment for Jupyter notebooks, code, and data with support for extensions." It supports their custom IPYNB (IPython Notebook) file format, a sort of Markdown + python combination, plus other languages such as R, C++, Vanilla Python, and Julia.

### Installation

First, you want to have Anaconda Python installed (Skip if you have it installed.)
<br>

Windows x64:
<code>
  https://repo.anaconda.com/archive/Anaconda3-2021.05-Windows-x86_64.exe
</code>
<br>
MacOS x64:
<code>
https://repo.anaconda.com/archive/Anaconda3-2021.05-MacOSX-x86_64.pkg
</code>
Linux x64:
<code>
 https://repo.anaconda.com/archive/Anaconda3-2021.05-Linux-x86_64.sh
</code>
   
Wait for the graphical installers to finish. Then in the Anaconda CMD Prompt (The app labeld Anaconda Prompt), execute the following command.

<br>

<code>
  conda install -c conda-forge jupyterlab
</code>
   
After the installation has finished, execute the following command in the same prompt

<code>
jupyter notebook
</code>
<br>
That's it! You now have Jupyter Lab installed!
   
