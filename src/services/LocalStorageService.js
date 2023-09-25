class LocalStorageService {
    static USER_DATA_KEY = "userData";
    
    static saveUserData(userData) {
        localStorage.setItem(this.USER_DATA_KEY, JSON.stringify(userData))
    }


    static getUserData() {
        const storedData = localStorage.getItem(this.USER_DATA_KEY)
        if (storedData) {
            return JSON.parse(storedData)
        }
        return null
    }


    static clearUserData() {
        localStorage.removeItem(this.USER_DATA_KEY)
    }


}
export default LocalStorageService


/*export const setUserData1 = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData))
}

export const getUserData1= () => {
    return JSON.parse(localStorage.getItem("userData"));
}

export const setisClicked1 = (isClicked) => {
    localStorage.setItem("isClicked", isClicked)
}

export const getisClicked1 = () => {
    return localStorage.getItem("isClicked");
}

export const removeLocal=()=>{
        return localStorage.removeItem("userData")
}

export const getImageUrl = (imageUrl) => {
    return localStorage.getItem("imageUrl");
}
export const setImageUrl = (imageUrl) => {
    localStorage.setItem("imageUrl", imageUrl)
}*/