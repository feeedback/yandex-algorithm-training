package main

import (
	"fmt"
	"math"
)

func countPaintedTrees(treeIndexV, treeIndexM, radiusV, radiusM int) int {
	minIndexV := treeIndexV - radiusV
	maxIndexV := treeIndexV + radiusV

	minIndexM := treeIndexM - radiusM
	maxIndexM := treeIndexM + radiusM

	maxIndex := int(math.Max(float64(minIndexV), math.Max(float64(maxIndexV), math.Max(float64(minIndexM), float64(maxIndexM)))))
	minIndex := int(math.Min(float64(minIndexV), math.Min(float64(maxIndexV), math.Min(float64(minIndexM), float64(maxIndexM)))))

	maxDistance := maxIndex - minIndex

	gap := 0
	if minIndexV > maxIndexM {
		gap = int(math.Max(0, float64(minIndexV-maxIndexM-1)))
	}
	if minIndexM > maxIndexV {
		gap = int(math.Max(0, float64(minIndexM-maxIndexV-1)))
	}

	paintedTrees := maxDistance - gap + 1

	return paintedTrees
}

func main() {
	var treeIndexV, treeIndexM, radiusV, radiusM int
	fmt.Scan(&treeIndexV, &radiusV, &treeIndexM, &radiusM)

	fmt.Print(countPaintedTrees(treeIndexV, treeIndexM, radiusV, radiusM))
}
