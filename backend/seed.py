from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models, auth

# Initialize Database
models.Base.metadata.create_all(bind=engine)

def get_password_hash(password):
    return auth.get_password_hash(password)

def seed_data():
    db = SessionLocal()
    
    try:
        print("🌱 Seeding Database...")

        # --- 1. Create Admin ---
        admin_email = "admin@devagency.com"
        admin = db.query(models.User).filter(models.User.email == admin_email).first()
        if not admin:
            admin = models.User(
                email=admin_email,
                hashed_password=get_password_hash("admin123"),
                full_name="Super Admin",
                role=models.UserRole.ADMIN,
                is_active=True
            )
            db.add(admin)
            print(f"Created Admin: {admin_email}")
        
        # --- 2. Create Clients ---
        clients_data = [
            {"email": "client1@business.com", "name": "Alice Business"},
            {"email": "client2@startup.io", "name": "Bob Founder"},
            {"email": "client3@retail.net", "name": "Charlie Shop"},
        ]
        
        db_clients = []
        for c in clients_data:
            user = db.query(models.User).filter(models.User.email == c["email"]).first()
            if not user:
                user = models.User(
                    email=c["email"],
                    hashed_password=get_password_hash("client123"),
                    full_name=c["name"],
                    role=models.UserRole.CLIENT,
                    is_active=True
                )
                db.add(user)
                print(f"Created Client: {c['email']}")
            db_clients.append(user)
        
        # --- 3. Create Interns ---
        interns_data = [
            {"email": "intern1@college.edu", "name": "Dave Developer"},
            {"email": "intern2@uni.edu", "name": "Eve Engineer"},
            {"email": "intern3@tech.edu", "name": "Frank Frontend"},
            {"email": "intern4@code.edu", "name": "Grace Git"},
            {"email": "intern5@hack.edu", "name": "Hank Hacker"},
        ]

        for i in interns_data:
            user = db.query(models.User).filter(models.User.email == i["email"]).first()
            if not user:
                user = models.User(
                    email=i["email"],
                    hashed_password=get_password_hash("intern123"),
                    full_name=i["name"],
                    role=models.UserRole.INTERN,
                    is_active=True
                )
                db.add(user)
                print(f"Created Intern: {i['email']}")

        db.commit() # Commit users to get IDs

        # Re-fetch clients to ensure we have valid objects bound to the session
        alice = db.query(models.User).filter(models.User.email == "client1@business.com").first()
        bob = db.query(models.User).filter(models.User.email == "client2@startup.io").first()

        # --- 4. Create Projects ---
        projects_data = [
            {
                "client_id": alice.id,
                "title": "AI Chatbot for Gym",
                "description": "A customer support chatbot using OpenAI API.",
                "budget": 5000.0
            },
            {
                "client_id": bob.id,
                "title": "E-commerce for Shoe Store",
                "description": "Full stack shop with Stripe integration.",
                "budget": 12000.0
            }
        ]

        db_projects = []
        for p_data in projects_data:
            project = db.query(models.Project).filter(models.Project.title == p_data["title"]).first()
            if not project:
                project = models.Project(
                    client_id=p_data["client_id"],
                    title=p_data["title"],
                    description=p_data["description"],
                    budget=p_data["budget"],
                    status=models.ProjectStatus.IN_PROGRESS
                )
                db.add(project)
                print(f"Created Project: {p_data['title']}")
            db_projects.append(project)
        
        db.commit()

        # Re-fetch projects
        gym_project = db.query(models.Project).filter(models.Project.title == "AI Chatbot for Gym").first()
        shoe_project = db.query(models.Project).filter(models.Project.title == "E-commerce for Shoe Store").first()

        # --- 5. Create Tasks ---
        tasks_data = [
            # Gym Project Tasks
            {"project_id": gym_project.id, "title": "Setup OpenAI API", "bounty": 500.0, "desc": "Create helper functions for API calls."},
            {"project_id": gym_project.id, "title": "Build Chat Interface", "bounty": 800.0, "desc": "React frontend for chat window."},
            {"project_id": gym_project.id, "title": "Design Gym Logo", "bounty": 200.0, "desc": "SVG logo for header."},
            {"project_id": gym_project.id, "title": "Backend Routes", "bounty": 600.0, "desc": "FastAPI routes for message handling."},
            
            # Shoe Store Tasks
            {"project_id": shoe_project.id, "title": "Setup Stripe", "bounty": 1500.0, "desc": "Payment gateway integration."},
            {"project_id": shoe_project.id, "title": "Product Card Component", "bounty": 300.0, "desc": "Reusable React component."},
            {"project_id": shoe_project.id, "title": "Cart Logic", "bounty": 700.0, "desc": "Redux state for shopping cart."},
            {"project_id": shoe_project.id, "title": "Fix Navbar Responsive", "bounty": 250.0, "desc": "Mobile menu bug fix."},
            {"project_id": shoe_project.id, "title": "Admin Dashboard", "bounty": 1000.0, "desc": "View for orders and inventory."},
            {"project_id": shoe_project.id, "title": "Deploy to Vercel", "bounty": 400.0, "desc": "CI/CD pipeline setup."},
        ]

        for t in tasks_data:
            task = db.query(models.Task).filter(models.Task.title == t["title"]).first()
            if not task:
                task = models.Task(
                    project_id=t["project_id"],
                    title=t["title"],
                    description=t["desc"],
                    bounty_amount=t["bounty"],
                    is_completed=False
                )
                db.add(task)
                print(f"Created Task: {t['title']}")

        db.commit()
        print("✅ Seeding Complete!")

    except Exception as e:
        print(f"❌ Error seeding data: {e}")
        db.rollback()
    finally:
        db.close()

if __name__ == "__main__":
    seed_data()