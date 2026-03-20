export interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  category: string
  createdAt: string
  dueDate?: string
}
