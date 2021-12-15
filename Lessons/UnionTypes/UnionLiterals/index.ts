/**
 * We can use literal types with TypeScript unions. Literal type unions are useful when we want to create distinct states within a program.

For instance, if we were writing the code that controlled stoplights, we might write a program like this:

type Color = 'green' | 'yellow' | 'red';
 
function changeLight(color: Color) {
  // ...
}
With the code above, we could ensure that wherever changeLight() is called, that it gets passed only allowed stoplight colors. If we tried to call changeLight('purple'), TypeScript would complain, since that is not a valid stoplight color.

This technique allows us to write functions that are specific about the states they can handle, which helps us write code that’s less prone to errors.
 */

type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status){
  if(status === 'idle'){
    console.log('Download');
  } else if (status === 'downloading'){
    console.log('Downloading...');
  } else if (status === 'complete'){
    console.log('Your download is complete!');
  }

};

downloadStatus('idle');