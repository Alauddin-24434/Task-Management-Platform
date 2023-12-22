import axiosSecure from ".";

export const getRole = async email => {
    const { data } = await axiosSecure(`/user/${email}`)
    return data;
}