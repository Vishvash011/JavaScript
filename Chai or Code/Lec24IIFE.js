// Immediately Invoked  Function Expression (IIFE)

(function chai()
// name iife
{
    console.log("DB  connected");
})();

// normal iife
( (name) => {
    console.log(`db connected 2 ${name}`);
})("vishvash");