const fs= require('fs');

const access_database= {
    package_db: (package_path, package) => {
        // let package_json= JSON.parse(fs.readFileSync(`{package_path} + {package} +.json`, 'utf-8'));
        let package_json= JSON.parse(fs.readFileSync(package_path + package + '.json', 'utf-8'));
        return package_json; 
    }
};


module.exports= access_database