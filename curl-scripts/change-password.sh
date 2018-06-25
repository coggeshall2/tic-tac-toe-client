# ID=2 sh curl-scripts/json/change-password.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
# Copy below line into command line just enter infor in between quotes
# TOKEN="" OLD_PASSWORD="" NEW_PASSWORD="" sh curl-scripts/json/change-password.sh
