export const setUserData = (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData))
}

export const getUserData= () => {
    return JSON.parse(localStorage.getItem("userData"));
}

export const setisClicked = (isClicked) => {
    localStorage.setItem("isClicked", isClicked)
}

export const getisClicked = () => {
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
}