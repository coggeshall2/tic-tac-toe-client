# TOKEN=tokengoeshere sh curl-scripts/examples/show.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/${ID}" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \

echo
