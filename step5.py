def categorize_transaction(description: str) -> str:
    description = description.lower()

    category_keywords = {
        "food": ["pizza", "burger", "restaurant", "coffee", "meal", "dining", "snack", "food"],
        "travel": ["uber", "taxi", "bus", "train", "flight", "cab", "ola", "hotel", "travel", "ticket", "fuel"],
        "entertainment": ["movie", "netflix", "concert", "game", "theatre", "music", "spotify", "youtube", "show"],
        "shopping": ["mall", "clothes", "shoes", "amazon", "store", "shopping", "flipkart", "myntra", "electronics", "accessories"],
        "healthcare": ["doctor", "hospital", "medicine", "pharmacy", "healthcare", "clinic", "dental", "eye", "insurance"],
        "education": ["books", "pen", "course", "tuition", "school", "college", "university", "training", "exam", "education", "calculator"],
        "bills": ["electricity", "water", "internet", "rent", "phone"],
        # Add more categories and keywords as needed
    }

    for category, keywords in category_keywords.items():
        if any(keyword in description for keyword in keywords):
            return category

    return "others"  # Default category if no match
