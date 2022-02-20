// Creating a link token and passes it to the app

import { Text } from 'react-native';
import { PlaidLink, LinkSuccess, LinkExit } from 'react-native-plaid-link-sdk';

const MyPlaidComponent = () => {
    return (
        <PlaidLink
            tokenConfig={{
                token: "#GENERATED_LINK_TOKEN#",
            }}
            onSuccess={(success: LinkSuccess) => { console.log(success) }}
            onExit={(exit: LinkExit) => { console.log(exit) }}
        >
            <Text>Add Account</Text>
        </PlaidLink>
    );
};