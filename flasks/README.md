# Init

Requires node 18+ (e.g., `nvm use 18`)
 
Set up, e.g., for *nix

1. `cd flasks`
2. `python3 -m venv venv`
3. `source venv/bin/activate`
4. `pip install -r requirements`
5. `cd client`
6. `yarn build`
7. `cd ..`
8. Now run it: `flask run --port 5001`

NB: You'll want to choose a port that's different from wherever you're running dlx-rest, though presently that's not a requirement. Port 5001 is the example.