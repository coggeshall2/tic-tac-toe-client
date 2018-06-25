# ID=2 sh curl-scripts/sign-out.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-out" \
  --include \
  --request DELETE  \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data {}

echo
