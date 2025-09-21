def categorize_transaction(description: str) -> str:
    description = description.lower()

    category_keywords = {
        "food": ["pizza", "burger", "restaurant", "coffee", "meal"],
        "travel": ["uber", "taxi", "bus", "train", "flight"],
        "entertainment": ["movie", "netflix", "concert", "game"],
        "shopping": ["mall", "clothes", "shoes", "amazon", "store"],
        "bills": ["electricity", "water", "internet", "rent", "phone"],
        # Add more categories and keywords as needed
    }

    for category, keywords in category_keywords.items():
        if any(keyword in description for keyword in keywords):
            return category

    return "others"  # Default category if no match
