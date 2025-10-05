from flask import Blueprint, request, jsonify

booking_bp = Blueprint("booking", __name__)

@booking_bp.route("/submit_booking", methods=["POST"])
def submit_booking():
    data = request.get_json()
    if not data:
        return jsonify({"message": "No data provided"}), 400

    # Here you would typically save the booking data to a database
    # For now, we'll just print it and return a success message
    print("Received booking request:", data)

    # In a real application, you would also:
    # 1. Validate the input data
    # 2. Store it in a database
    # 3. Send confirmation emails
    # 4. Integrate with a payment gateway
    # 5. Handle potential errors

    return jsonify({"message": "Booking request received successfully! We will contact you shortly.", "data": data}), 200

