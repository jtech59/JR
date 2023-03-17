// Initialize OAuth.io with your public API key
OAuth.initialize('your_oauthio_public_key_here');

// Define the provider and scope to authenticate with
var provider = 'google';
var scope = 'email';

// Trigger the OAuth flow by opening a popup window
OAuth.popup(provider, {scope: scope})
    .done(function(result) {
        // Retrieve the user's profile data using the access token
        result.get('/me')
            .done(function(data) {
                console.log(data);
            })
            .fail(function(err) {
                console.error(err);
            });
    })
    .fail(function(err) {
        console.error(err);
    });
