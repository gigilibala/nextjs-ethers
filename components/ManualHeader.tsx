import { useEffect } from "react";
import { useMoralis } from "react-moralis";

/**
 *
 * @returns The header of an HTML.
 */
export default function ManualHeader() {
    const {
        enableWeb3,
        isWeb3Enabled,
        account,
        Moralis,
        deactivateWeb3,
        isWeb3EnableLoading,
    } = useMoralis();

    useEffect(() => {
        if (isWeb3Enabled) return;
        if (typeof window != undefined) {
            if (window.localStorage.getItem("connected")) enableWeb3();
        }
    }, [isWeb3Enabled]);

    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Account changed to ${account}`);
            if (account == null) {
                window.localStorage.removeItem("connected");
                deactivateWeb3();
            }
        });
    }, []);

    return account ? (
        <div>
            Connected to {account.slice(0, 4)}...
            {account.slice(account.length - 4)}
        </div>
    ) : (
        <div>
            <button
                onClick={async () => {
                    console.log("connecting");
                    await enableWeb3();
                    if (typeof window != undefined) {
                        window.localStorage.setItem("connected", "injected");
                    }
                }}
                disabled={isWeb3EnableLoading}
            >
                Connect
            </button>
        </div>
    );
}
