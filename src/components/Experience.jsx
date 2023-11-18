import React from 'react';

export const Experience = () => {
    const svgImageUrl1= 'https://cdn.worldvectorlogo.com/logos/python-5.svg';
    const svgImageUrl2= 'https://cdn.worldvectorlogo.com/logos/tensorflow-2.svg';
    const svgImageUrl3= 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg';
    const svgImageUrl4= 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg';
    const svgImageUrl5= 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg';
    const svgImageUrl6= 'https://cdn.worldvectorlogo.com/logos/vitejs.svg';
    const svgImageUrl7= 'https://cdn.worldvectorlogo.com/logos/next-js.svg';
    const svgImageUrl8= 'https://bun.sh/logo.svg';
    const svgImageUrl9= 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg';
    const svgImageUrl10= 'https://cdn.worldvectorlogo.com/logos/html-1.svg';
    const svgImageUrl11= 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg';
    const svgImageUrl12= 'https://seeklogo.com/images/J/jupyter-logo-A91705F539-seeklogo.com.png';
    const svgImageUrl13= 'https://gitlab.poul.org/uploads/-/system/project/avatar/109/reveal.js-2020-05-28_09-58-06-icon-resized.png';
    const svgImageUrl14= 'https://github.gallerycdn.vsassets.io/extensions/github/codespaces/1.16.2/1698357221330/Microsoft.VisualStudio.Services.Icons.Default';
    const svgImageUrl15= 'https://www.svgrepo.com/show/361653/vercel-logo.svg';
    const svgImageUrl16= 'https://cdn.worldvectorlogo.com/logos/git-bash.svg';

  return (
    <div name='Experience' className='w-full h-screen bg-[#080e18] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>experience</p>
                <p className='py-4'>these are the tools that i've used so far, might as well gonna change in the future</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl1} alt='python' />
                    <p className='my-4'>python</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl3} alt='javasript' />
                    <p className='my-4'>javascript</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl4} alt='vscode' />
                    <p className='my-4'>visual studio code</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl5} alt='github' />
                    <p className='my-4'>github</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl6} alt='vite' />
                    <p className='my-4'>vite</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl7} alt='next' />
                    <p className='my-4'>next.js</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl8} alt='bun' />
                    <p className='my-4'>bun</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl9} alt='node' />
                    <p className='my-4'>node</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl10} alt='html' />
                    <p className='my-4'>html</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl11} alt='tailwind' />
                    <p className='my-7'>tailwind</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl12} alt='jupyter' />
                    <p className='my-4'>jupyter notebook</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl2} alt='tf' />
                    <p className='my-4'>tensorflow</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl13} alt='reveal' />
                    <p className='my-4'>reveal.js</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl14} alt='codespaces' />
                    <p className='my-4'>codespaces</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl15} alt='vercel'/>
                    <p className='my-4'>vercel</p>
                </div>
                <div>
                    <img className='w-14 mx-auto' src={svgImageUrl16} alt='git bash'/>
                    <p className='my-4'>bash</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience