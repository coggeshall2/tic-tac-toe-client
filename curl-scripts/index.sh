# TOKEN=tokengoeshere sh curl-scripts/examples/index.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
