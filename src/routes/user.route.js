import * as user from '../controller/user.controller' ;

const userRoutes = (app) => {
    app.post('/api/v1/users', user.addUser);
    app.get('/api/v1/users', user.getAllUser);  
    app.get('/api/v1/users/:username', user.getUserByUsername);    
}

export default userRoutes;