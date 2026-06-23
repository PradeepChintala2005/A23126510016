# Notification System Design

## Overview

This system displays notifications to users and shows the most important notifications first.

## Priority Order

Notifications are ranked in the following order:

1. Placement
2. Result
3. Event

Placement notifications are given higher priority because they are more important to students.

## Working

1. Notifications are fetched from the API.
2. Each notification is assigned a priority based on its type.
3. Notifications are sorted by priority.
4. If two notifications have the same priority, the latest notification is shown first.
5. The top notifications are displayed to the user.

## Notification Details

Each notification contains:

* ID
* Type
* Message
* Timestamp 

## Data Structure Used

An array is used to store notifications. Each notification contains ID, Type, Message, and Timestamp.