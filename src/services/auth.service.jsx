import http from "../http-common.js";

class AuthService {
    register(data) {
        return http.post('/register', data);
    }

    login(data) {
        return http.post('/login', data);
    }

    check(data) {
        return http.get('/check-auth', data);
    }

    logout() {
        return http.post('/logout');
    }
}

export default new AuthService();