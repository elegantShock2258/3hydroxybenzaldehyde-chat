# 3hydroxybenzaldehyde chat

A browser-only gemini wrapper.

The app supports multi-conversation chat, conversational context, local persistence, with a roadmap for advanced multimodal and collaborative features.

## Project Goals

This project aims to build a fully client-side AI chat experience with clean architecture, strong UX, and extensibility in mind.

## Primary Objectives

Maintain conversational context within each chat
Provide a sidebar listing all chats
Build a functional MVP chat interface
Store chat history locally in the browser

## Application Flow

### Routing Structure

/
Landing page prompting the user to start a conversation

/chat
Default chat entry point

/chat/[id]
Individual chat session, where id is a UUID
Each chat maintains its own message history and context

## Core Features (Implemented / MVP Scope)

Client-side AI chat interface
Multi-chat support using unique chat IDs
Sidebar listing all existing chats
Conversational context maintained per chat
Chat history stored entirely in local browser storage
Clean landing experience guiding users into chat
Navigation bar displaying the application title
Redirect main application icon to /chat
No backend or database is used. All state is local and session-based.
State & Data Handling
Each chat is identified by a UUID
Messages are stored as ordered user/AI pairs
Chat state is persisted using browser storage
Chat history is restored on refresh
Conversational context is rebuilt from stored messages on each interaction

## Future Enhancements

The architecture is designed to support future expansion, including:

Share chat sessions
Multiple interaction modes: Code generation,Image generation,General conversation,Live code canvas for writing and AI-assisted debugging,File analysis,Live audio and video analysis,Screen sharing with real-time AI suggestions,Audio input

Support for multiple AI types, similar to different GPT variants

These features are not part of the MVP but are considered in the overall design.
