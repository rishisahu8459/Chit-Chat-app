import React, { Children, createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({children})=> {
const [profile]= useState(false);
return <ProfileContext.Provider>
     {children}
     </ProfileContext.Provider>;



};
export const useProfile = ()=> useContext(ProfileContext);