export const Userdetails = ({ name, Isonline, hiddeoffline, role }) => {


    if (hiddeoffline && !Isonline) {
        return null;
    }
    //using ternory
    let roleBadge = null;
    if (role === 'admin') {
        roleBadge = <span>Admin</span>
    }
    else if (role === 'moderator') {
        roleBadge = <span>moderator</span>
    }

    return (
        <div>
            <p>{name}

                <p>{roleBadge}</p>
            </p>

            <span>{Isonline ? "Online" : "OffLine"}</span>
            <p>{Isonline ? "available" : "Not Available"}</p>
            <p>{Isonline ? "Available for chat" : "Not Availble for chat"}</p>
        </div>
    )


    /*
    
    
    
        if (Isonline) {
            return (
                <div>
                    <p>{name}</p>
                    <span>Online</span>
                    <p>Available for chat</p>
                </div>
            );
    
        }
        return (
            <div>
                <p>{name}</p>
                <span>OffLine</span>
                <p>Not Availble for chat</p>
            </div>
        )
    
    */

}