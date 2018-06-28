# ID=2 TOKEN=tokengoeshere TEXT=textgoeshere sh curl-scripts/examples/update.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/examples/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "example": {
      "text": "'"${TEXT}"'"
    }
  }'
