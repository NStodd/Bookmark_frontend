import { redirect } from "react-router-dom";

const URL = "https://bookmark-backend-ae9o.onrender.com"

export const createBookmark = async ({request}) => {
    const formData = await request.formData()

    const newBookmark = {
        title: formData.get("title"),

        url: formData.get("url")
    }

    await fetch(URL + "/book", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newBookmark)
    })
    return redirect("/")
}

export const updateBookmark = async ({request, params}) => {
    const formData = await request.formData()

    const updatedBookmark = {
        title: formData.get("title"),
        url: formData.get("url")
    }

    await fetch(URL + "/book/" + params.id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedBookmark)
    })
    return redirect('/')
}

export const deleteBookmark = async ({params}) => {
    await fetch (URL + "/book/" + params.id, {
        method: "delete"
    })

    return redirect("/")
}