# Lamhe Configuration Guide

## Overview
The Lamhe page displays your life moments as a weighted, directed graph where nodes represent key moments and edges show the flow of time.

## Configuration File: moments.json

### Schema
```json
{
  "moments": [
    {
      "time": {
        "year": 2024,      // Required: Year (number)
        "month": 12        // Required: Month (1-12)
      },
      "title": "Title",    // Required: Node label
      "description": "...", // Optional: Description text
      "image": "img/...",  // Optional: Image path
      "weight": 8          // Optional: Edge weight (1-10, default: 5)
    }
  ]
}
```

### Field Descriptions

- **time.year**: The year this moment occurred
- **time.month**: The month (1-12) this moment occurred
- **title**: Short title for the node (shown prominently)
- **description**: Additional details (shown below title)
- **image**: Path to image file relative to the static folder
- **weight**: Represents importance/connection strength
  - Range: 1-10
  - Higher weight = thicker edge connecting to this moment
  - Default: 5 if not specified

## How It Works

### 1. Automatic Chronological Sorting
Moments are automatically sorted by time (oldest to newest), regardless of the order in your JSON file.

### 2. Graph Layout
- First moment: Centered at top
- Subsequent moments: Alternate left-right pattern
- Vertical spacing: 250px between levels
- Horizontal spacing: 350px from center

### 3. Edges (Connections)
- **Type**: Directed edges with arrow markers
- **Style**: Smooth curved lines (smoothstep)
- **Animation**: Flowing dashed lines showing direction
- **Weight**: Thickness based on the weight field
  - Weight 1 = 1px stroke
  - Weight 5 = 5px stroke (default)
  - Weight 10 = 10px stroke (maximum)
- **Color**: Theme blue (#61afef)

### 4. Interactive Features
- **Draggable nodes**: Drag any node to explore
- **Auto-reset**: Nodes return to original position after 2 seconds
- **Non-editable edges**: Cannot be deleted or reconnected
- **Controls**: Zoom in/out, fit view, etc.

## Adding New Moments

1. Open `src/data/moments.json`
2. Add a new entry to the `moments` array:
```json
{
  "time": { "year": 2025, "month": 6 },
  "title": "New Achievement",
  "description": "Something amazing",
  "image": "img/photo.jpg",
  "weight": 7
}
```
3. The graph will automatically update with proper sorting and positioning

## Tips for Best Results

1. **Weight Guidelines**:
   - 1-3: Minor moments or transitions
   - 4-6: Regular milestones
   - 7-9: Major life events
   - 10: Life-changing moments

2. **Images**:
   - Place images in `static/img/` folder
   - Reference as `img/filename.jpg`
   - Recommended size: 400x300px or similar aspect ratio

3. **Descriptions**:
   - Keep concise (1-2 lines)
   - If omitted, shows formatted date (e.g., "Jan 2024")

4. **Number of Moments**:
   - Works best with 5-15 moments
   - Too many may require scrolling to see all

## Graph Representation

This creates a **weighted directed acyclic graph (DAG)** representing life as a journey:
- **Nodes**: Life moments (vertices)
- **Edges**: Chronological progression (directed)
- **Weights**: Significance of transitions
- **Direction**: Forward in time (cannot go backwards)

Perfect for visualizing your personal journey through time!
