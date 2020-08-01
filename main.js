/* MEGAMIND NODE-PHP SERVER*/

const exec = require('child_process').exec;
exec('cd php && call php -S localhost:80', (e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('stdout ', stdout);
    console.log('stderr ', stderr);
});

exec('cd php/mysql/bin && call mysqld', (e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('mysql started', stdout);
});

exec('start http://localhost:80/www', (e, stdout, stderr)=> {
    if (e instanceof Error) {
        console.error(e);
        throw e;
    }
    console.log('Server Started', stdout);
});
