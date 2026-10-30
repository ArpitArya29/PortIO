import { db } from "../libs/db.js";

export const getAddress = async(req, res) => {
    try {
        const user = req.user;

        const address = await db.address.findFirst({
            where: {
                user,
            }
        });

        if(!address) {
            return res.status(400).json({
                message: "Adderess not found for the user",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Address fetched for the user",
            address,
        });
        
    } catch (error) {
        console.log("Error fetching address", error);
        return res.status(500).json({
            success: false,
            message: "Failed fetching address",
            error,
        });
    }
}


export const addAddress = async(req, res) => {
    try {
        const user = req.user;

        const { address } = req.body;

        if(!address || typeof address !== "object") {
            return res.status(400).json({
                message: "Address is required",
            });
        }

        const { city, state, country } = address;

        if(
            typeof state !== "string" || !state.trim() ||
            typeof country !== "string" || !country.trim()
        ) {
            return res.status(400).json({
                message: "State and country are required",
            });
        }

        const createdAddress = await db.address.create({
            data: {
                city: city?.trim() || null,
                state: state.trim(),
                country: country.trim(),
                user: {
                    connect: {
                        id: user.id,
                    },
                },
            },
        });

        return res.status(201).json({
            success: true,
            message: "Address Addedd Successfully",
            address: createdAddress,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed Adding address",
            error,
        });
    }
}


export const updateAddress = async(req, res) => {
    try {
        const addressId = req.params.id;

        const { city, state, country } = req.body;

        if(!addressId) {
            return res.status(400).json({
                message: "Address id not provided",
            });
        }

        const existingAddress = await db.address.findFirst({
            where: {
                id: addressId,
            },
        });

        if(!existingAddress) {
            return res.status(401).json({
                message: "Address not found for the user",
            });
        }

        if(
            (city!==undefined && city.toLowerCase()==existingAddress.city) &&
            (state!==undefined && state.toLowerCase()==existingAddress.state) &&
            (country!==undefined && country.toLowerCase()==existingAddress.country)
        ) {
            return res.status(400).json({
                message: "Nothing to update",
            });
        }

        const updatedAddress = await db.address.update({
            where: {
                id: addressId,
            }, data: {
                ...(city !== undefined && {city: city.trim().toLowerCase()}),
                ...(state !== undefined && {state: state.trim().toLowerCase()}),
                ...(country !== undefined && {country: country.trim().toLowerCase()}),
            }
        });

        return res.status(200).json({
            success: true,
            message: "Address Updated successfully",
            updatedAddress,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed updating address",
            error,
        })
    }
}


export const deleteAddress = async(req, res) => {
    try {
        const addressId = req.params.id;

        if(!addressId) {
            return res.status(400).json({
                message: "Address not provided",
            });
        }

        const existingAddress = await db.address.findFirst({
            where: {
                id: addressId,
            }
        });

        if(!existingAddress) {
            return res.status(401).json({
                message: "Address not found for the user",
            });
        }

        await db.address.delete({
            where: {
                id: addressId,
            }
        });

        return res.status(200).json({
            success: true,
            message: "Address deleted successfully",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed deleting address",
            error,
        });
    }
}