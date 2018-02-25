const exec = require('child_process').exec;
const execSync = require('child_process').execSync;
module.exports.mouseMover = {
    move: (x, y) => {
        const setCursor = "nircmdc.exe setcursor " + x + " " + y;
        exec(setCursor, (error, stdout, stderror) => {
            
        });
    },
    position: ()  => {
        const getPosition = "mouse.exe position";
        var position = undefined;
        const result = execSync(getPosition).toString();
        return {
            x: parseInt(result.split("x")[0]),
            y: parseInt(result.split("x")[1]) 
        };
    }
};