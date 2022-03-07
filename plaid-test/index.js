(async ($) => {
    // Grab a Link token to initialize Link
    const createLinkToken = async () => {
        const res = await fetch("https://birdboombox.com/api/create_link_token");
        const data = await res.json();
        const linkToken = data.link_token;
        localStorage.setItem("link_token", linkToken);
        return linkToken;
    };

    // Initialize Link
    const handler = Plaid.create({
        token: await createLinkToken(),
        onSuccess: async (publicToken, metadata) => {
            const res = await fetch("https://birdboombox.com/api/exchange_public_token", {
                method: "POST",
                body: JSON.stringify({ public_token: publicToken }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            const accessToken = data.access_token;
            localStorage.setItem("access_token", accessToken);
            await getBalance();
        },
        onEvent: (eventName, metadata) => {
            console.log("Event:", eventName);
            console.log("Metadata:", metadata);
        },
        onExit: (error, metadata) => {
            console.log(error, metadata);
        },
    });

    // Start Link when button is clicked
    const linkAccountButton = document.getElementById("link-account");
    linkAccountButton.addEventListener("click", (event) => {
        handler.open();
    });
})(jQuery);

// Retrieves balance information
const getBalance = async function () {
    const response = await fetch("https://birdboombox.com/api/getBalance", {
        method: "POST",
        body: JSON.stringify({ access_token: localStorage.getItem("access_token") }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();

    //Render response data
    const pre = document.getElementById("response");
    pre.textContent = JSON.stringify(data, null, 2);
    pre.style.background = "#F6F6F6";
};

// Check whether account is connected
const getStatus = async function () {
    const account = await fetch("https://birdboombox.com/api/is_account_connected", {
        method: "POST",
        body: JSON.stringify({ access_token: localStorage.getItem("access_token") }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    const connected = await account.json();
    if (connected.status == true) {
        getBalance();
    }
};

getStatus();
