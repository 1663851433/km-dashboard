import { Card, CardContent } from "@/components/ui/card"

const products = [
  { name: "松脂", quantity: "1000 kg", price: "$2000" },
  { name: "松香", quantity: "500 kg", price: "$1500" },
  { name: "松节油", quantity: "300 kg", price: "$1200" },
]

export function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card key={product.name} className="bg-[#252b48] border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">{product.name}</h3>
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">数量: {product.quantity}</p>
              <p className="text-sm text-muted-foreground">价格: {product.price}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
