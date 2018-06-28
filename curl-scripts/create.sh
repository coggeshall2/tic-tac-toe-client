# TOKEN=tokengoeshere TEXT=textgoeshere sh curl-scripts/examples/create.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'

echo
