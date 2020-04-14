console.log('Request data...');

// setTimeout(()=>{
//     console.log('Preparing data');
//
//     const backendData = {
//         server:'aws',
//         port: 2000,
//         status:'working'
//     }
//     setTimeout(()=>{
//         backendData.modified = true;
//         console.log('Data received', backendData)
//     }, 2000)
// },2000);

const sleep = ms =>{
    return new Promise(resolve => {
        setTimeout(()=>resolve(), ms)
    })
};

// sleep(2000).then(()=>console.log('After 2 sec'));
// sleep(3000).then(()=>console.log('After 3 sec'));

Promise.all([sleep(2000), sleep(5000)])
    .then(()=> { console.log('All promises')});

Promise.race([sleep(2000), sleep(5000)])
    .then(()=> { console.log('Race promises')});


