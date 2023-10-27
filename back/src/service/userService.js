const EMAIL = "pato@mail.com";
const PASSWORD = "Test1234";

const checkUser = async (email, password) => {
    if (email === EMAIL && password === PASSWORD){
        return true;
    }else{
        throw error ("login invalido");
    }
}

module.exports = checkUser;